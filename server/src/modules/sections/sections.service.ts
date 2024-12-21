import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sections } from './sections.model';
import * as fs from 'fs';
import * as path from 'path';

interface heroPayload {
    header: string;
    subHeader: string;
    image: string;
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

    async uploadHeroSection(body: heroPayload[] ): Promise<{message: string}>{
        const savedData = [];

        for (const item of body) {
          const { header, subHeader, image } = item;
    
          if (!image || !header || !subHeader) {
            throw new HttpException('Invalid data', HttpStatus.BAD_REQUEST);
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