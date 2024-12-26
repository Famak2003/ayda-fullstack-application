import { HttpException, HttpStatus, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sections } from './sections.model';
import * as fs from 'fs';
import * as path from 'path';
import { Pages } from '../pages/pages.model';

interface heroPayload {
    header: string;
    subHeader: string;
    image: string;
  }

  interface sectionPayload {
    pageName: string,
    type: string,
    content: any
}

@Injectable()
export class SectionsService {
    constructor(
        @InjectModel(Sections)
        private sectionModel: typeof Sections,
    ){}

    assetsPath = path.join(__dirname, '..', 'assets')

    getGreetings(): {greet: string} {
        return {greet: "Whats up bruv"}
    }

    getInfo(): {test: string}{
        return {test: "testing route 1234567890"}
    }

    async createSection(body: sectionPayload): Promise<Pages> {
      const page = await Pages.findOne({ where: { name: body.pageName } });
    
      if (page) {
        try {
          // Check if a section with the same type already exists for this page
          const existingSection = await Sections.findOne({
            where: {
              type: body.type,
              pageId: page.id, // Ensure it's for the same page
            },
          });
    
          let section;
          if (existingSection) {
            // Update the existing section
            section = await existingSection.update({
              content: body.content, // Overwrite content
            });
            console.log('Updated Section:', section);
          } else {
            // Create a new section if none exists
            section = await (page as any).createSection({
              type: body.type,
              content: body.content,
            });
            console.log('Created Section:', section);
          }
        } catch (error) {
          console.error('Error in createSection:', error);
        }
      } else {
        console.error('Page not found!');
        throw new InternalServerErrorException("Page not found")
      }
    
      return page;
    }
    

    async uploadSection(body: heroPayload[] ): Promise<{message: string}>{
        const savedData = [];

        for (const item of body) {
          const { header, subHeader, image } = item;
    
          if (!image || !header || !subHeader) {
            throw new HttpException('Missing Required Fields', HttpStatus.BAD_REQUEST);
          }
    
          // Extract Base64 data and save the image
          const matches = image.match(/^data:(.+);base64,(.+)$/);
          if (!matches) {
            throw new HttpException('Invalid Base64 format', HttpStatus.BAD_REQUEST);
          }
    
          const mimeType = matches[1];
          const base64Data = matches[2];
          const buffer = Buffer.from(base64Data, 'base64');
          const extension = mimeType.split('/')[1];
          const fileName = `image-${Date.now()}-${Math.random()}.${extension}`;
          const filePath = path.join(this.assetsPath, fileName);
    
          // Save the image to the assets folder
          fs.writeFileSync(filePath, buffer);
    
          // Simulate saving to a database
          const savedItem = {
            header,
            subHeader,
            imagePath: `assets/${fileName}`, // Save relative path
          };
          savedData.push(savedItem)
          //   this.database.push(savedItem); // Replace this with actual database logic
          //   savedData.push(savedItem);
        }

        // const dataBaseQuerry = await this.sectionModel.create({

        // })

        console.log(" ?????????????????? ",savedData)
    
        return { message: 'Images saved successfully'};
        // return { message: 'Images saved successfully', data: savedData };
    }
}