import { BadRequestException, ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Pages } from './pages.model';
import { Sections } from '../sections/sections.model';

@Injectable()
export class PagesService {
  constructor(
    @InjectModel(Pages)
    private pagesModel: typeof Pages,
  ) {}
  
  async findAll(): Promise<Pages[]> {
    return this.pagesModel.findAll();
  }

  getHello(): {str: string} {
    return {str: "Hey its running"}
  }

  findOne(id: string): Promise<Pages> {
    return this.pagesModel.findOne({
      where: {
        id,
      },
    });
  }

  async createPage(page: string): Promise<Pages>{
    if (!page){
      throw new BadRequestException("Missing Required Field")
    }
    // Check if page already exists
    const existingPage = await this.pagesModel.findOne({
      where: {name: page}
    })
    if (existingPage){
      throw new ConflictException("Page already existed")
    }
    try {
      const result = await this.pagesModel.create({
        name: page
      })
      return result
    } catch (error) {
      if (error.name === 'SequelizeValidationError') {
        console.error('Validation error:', error.errors);
      } else if (error.name === 'SequelizeUniqueConstraintError') {
        console.error('Unique constraint error:', error.errors);
      } else if (error.name === 'SequelizeDatabaseError') {
        console.error('Database error:', error.message);
      } else {
        console.error('Unexpected error:', error);
      }
      throw new InternalServerErrorException("Error processing page!")
    }
  }

  async getPage(pageName: string): Promise<{data: object}>{
    switch (pageName) {
      case "home":
        const data = {
          hero: [
            {
                "image": "https://images.unsplash.com/photo-1732492211739-16eea9575e84?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "header": "Come To Us To Have You",
                "subHeader": "Let's Give the Best Gift",
                "schecdule": {
                    "start": "9:00",
                    "end": "14:00"
                }
            },
            {
                "image": "https://images.unsplash.com/photo-1734312621516-3d258db95e76?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "header": "Lets Have You A Future",
                "subHeader": "Let's Give the Best Gift",
                "schecdule": {
                    "start": "1:00",
                    "end": "29000"
                }
            },
            {
                "image": "https://images.unsplash.com/photo-1734366965576-46c11158fc3e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "header": "You Cannot Get A Better Present",
                "subHeader": "Let's Give the Best Gift",
                "schecdule": {
                    "start": "7:00",
                    "end": "12:00"
                }
            },
            {
                "image": "https://images.unsplash.com/photo-1733910087506-f634f8a806de?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "header": "A Bright And Fufiling One",
                "subHeader": "Let's Give the Best Gift",
                "schecdule": {
                    "start": "11:00",
                    "end": "16:00"
                }
            }
          ],
          greetings: {
            header: "AYDA-IVF WEBSITE",
            subHeader: "Welcome",
            content: "Our clinic, located in the center of Nicosia, the capital of Northern Cyprus, is part of Elite Hospital and has been working tirelessly for years to help you achieve pregnancy. We are here to help all individuals who apply to our clinic with the desire to have a child, to the extent that science allows, with many techniques and methods, and with our most modern, innovative and state-of-the-art infrastructure . <br/><br/> I first started my 8-year professional life in IVF in Wiesbaden, Germany. For me, continuing my profession within the framework of ethical rules has always been above all else since the day I first took IVF . I understood how sacred and meaningful my profession was from the first day I transferred my first patient and shared her joy of pregnancy. <br/><br/> It is a great responsibility for the person in front of you to trust you and choose you, and it requires dedication and work. You embark on a meaningful and important journey with the patient . You laugh and cry together. Your patient is stressed; you are the one who will provide the most beautiful and most accurate consolation. Your patient is anxious; you are the one who is by her side and understands her. Your patient has gone through all these processes and the pregnancy test day has come; you are the one who will share this great excitement with her. You will share her biggest and most important secret and hope . That is why it is very important to be sincere, truthful and honest with your patient . <br/><br/> At the end of the day, the beautiful results of mutual efforts, being able to give our patients eternal happiness by giving them children, the prayers and thanks they read to you every time they look at their children are priceless feelings. When a person shares all these feelings, they draw the right path for their patients to get pregnant and steps are taken to achieve success with mutual understanding and effort. Here lies the answer to the question my patients have been asking for years, 'How can you be so successful and positive?' We receive our energy from you and give it back to you. <br/><br/> I can't thank enough each and every individual who chooses us for believing and trusting us and walking together on this path . If you haven't met us yet and want to embark on the IVF journey, let's take this step together. Let's take you one step further to become a family.",
            buttomSubHeader: "Tanyel DELEK, MS",
            buttomHeader: "Ayda IVF Team Director & Embryology Laboratory Manager",
            image: "https://images.unsplash.com/photo-1732165640755-b30a9b3d1069?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          methods: {
            header: "MOST FREQUENTLY PREFERRED",
            subHeader: "Our Treatment Methods",
            content: "Before you visit Ayda IVF Team, be sure to take a look at our treatment methods that we have prepared especially for you, carefully considering every detail, so that you can have more detailed information about your treatment. Here, you will have the opportunity to examine your suitable treatment more closely and get detailed information. <br/><br/> After reviewing our treatments, please remember that we are just a phone call away for any questions you may have. We look forward to meeting you and providing you with professional assistance so that you can have a healthy baby.",
            links: [
              {
                text: "In vitro fertilization (IVF)-ICSI",
                link: "tupbebekivf"
              },
              {
                text: "Egg Donation",
                link: "yumurtadonasyonu"
              },
              {
                text: "Sperm Donation",
                link: "spermdonasyonu"
              },
              {
                text: "Embryo Donation",
                link: "embriyodonasyonu"
              },
              {
                text: "Ovarian & Endometrial PRP",
                link: "ovarianprp"
              },
              {
                text: "Embryo Genetic Screening (NGS, Single Gene)",
                link: "#"
              },
              {
                text: "Sex Selection (PGD)",
                link: "#"
              },
              {
                text: "Egg Freezing",
                link: "yumurtadondurma"
              },
              {
                text: "Surrogacy",
                link: "#"
              },
              {
                text: "Embryo Genetic Screening (PGD)",
                link: "embriyogenetiktarama"
              },
            ]
          },
          location: {
            image: "https://images.unsplash.com/photo-1730114660685-fc179a2817fc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          footer: [
            { 
              icon: "https://img.icons8.com/fluency-systems-filled/50/map--v2.png",
              header: "Our address",
              address: "Martyr Erdoğan Yıldız St. No:5 Kızılay, Nicosia Northern Cyprus (TRNC)"
            },
            { 
              icon: "https://img.icons8.com/fluency-systems-filled/50/map--v2.png",
              header: "Communication",
              phone: "+905488252821",
              email: "info@aydaivf.com",
              medias: [
                "https://facebook.com",
                "https://instagram.com",
                "https://youtube.com",
              ]
            },
            { 
              icon: "https://img.icons8.com/fluency-systems-filled/50/map--v2.png",
              header: "Quick Access",
              links: [
                {
                  text: "Home Page",
                  link: "/",
                },
                {
                  text: "Treatments",
                  link: "#",
                },
                {
                  text: "Trip",
                  link: "seyahat",
                },
              ]
            },
          ]
        }
        const page = await Pages.findOne({ where: { name: pageName } });
        try {
          const sections = await Sections.findAll({
            where: {
              pageId: page.id, // Filter by pageId
            },
          });
      
          console.log('Sections with pageId "======>"', page.id, ...sections);
          // return sections
        } catch (error) {
          console.error('Error finding sections by pageId:', error);
          throw error;
        }

        return {data}
      // default:
      //   return {
      //     data: {
      //       message: "Development in progress"
      //     }
      //   }
    }
  }
}