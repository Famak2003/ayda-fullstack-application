import { BadRequestException, HttpException, HttpStatus, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sections } from './sections.model';
import * as fs from 'fs';
import * as path from 'path';
import { Pages } from '../pages/pages.model';

interface heroPayload {
    header: string;
    subHeader: string;
    image: string;
    // start: string;
    // stop: string;
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

    async createSection(body: sectionPayload): Promise<{message: string}> {
      const page = await Pages.findOne({ where: { name: body.pageName } });
    
      if (page) {
        try {
          const existingSection = await Sections.findOne({  // Check if a section with the same type already exists for this page
            where: {
              type: body.type,
              pageId: page.id, // Ensure it's for the same page
            },
          });
    
          let section;
          if (existingSection) {
            section = await existingSection.update({   // Update the existing section
              content: body.content, // Overwrite content
            });
            console.log('Updated Section:', section);
            return {message: "Updated Section "}
          } else {
            section = await (page as any).createSection({  // Create a new section if none exists
              type: body.type,
              content: body.content,
            });
            console.log('Created Section:', section);
            return {message: "Created Section "}
          }
        } catch (error) {
          console.error('Error in createSection:', error);
          throw new BadRequestException("Cannot create section", {
            cause: new Error(),
            description: error.message || "An unexpected error occurred"
          })
        }
      } else {
        console.error('Page not found!');
        throw new InternalServerErrorException("Page not found")
      }
    }
    

    async uploadSection(body: heroPayload[] ): Promise<{message: string}>{
      const savedData = [];
      const pageName:string = "home"
      const type:string = "hero"

      const page = await Pages.findOne({ where: { name: pageName } });

      if (page) {
        for (const item of body) {
          // const { header, subHeader, image, start, stop } = item;
          const { header, subHeader, image} = item;
    
          // if (!image || !header || !subHeader || !start || !stop) {
            if (!image || !header || !subHeader ) {
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
          // const savedItem = {
          //   header,
          //   subHeader,
          //   start,
          //   stop,
          //   imagePath: `assets/${fileName}`, // Save relative path
          // };
          const savedItem = {
            header,
            subHeader,
            imagePath: `assets/${fileName}`, // Save relative path
          };

          savedData.push(savedItem)
          //   this.database.push(savedItem); // Replace this with actual database logic
          //   savedData.push(savedItem);
        }
        try {
          const existingSection = await Sections.findOne({  // Check if a section with the same type already exists for this page
            where: {
              type: type,
              pageId: page.id, // Ensure it's for the same page
            },
          });
    
          let section;
          if (existingSection) {
            section = await existingSection.update({   // Update the existing section
              content: savedData, // Overwrite content
            });
            console.log('Updated Section:', section);
            return {message: "Updated Section "}
          } else {
            section = await (page as any).createSection({  // Create a new section if none exists
              type: type,
              content: savedData,
            });
            console.log('Created Section:', section);
            return {message: "Created Section "}
          }
        } catch (error) {
          console.error('Error in createSection:', error);
          throw new BadRequestException("Cannot create section", {
            cause: new Error(),
            description: error.message || "An unexpected error occurred"
          })
        }
      } else {
        console.error('Page not found!');
        throw new InternalServerErrorException("Page not found")
      }

        // const dataBaseQuerry = await this.sectionModel.create({

        // })

        // console.log(" ?????????????????? ",savedData)
    
        return { message: 'Images saved successfully'};
        // return { message: 'Images saved successfully', data: savedData };
    }
}