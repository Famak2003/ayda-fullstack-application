import { BadRequestException } from "@nestjs/common";
import { Pages } from "src/modules/pages/pages.model";

const AddSection = async(
    table: any,
    type: string,
    page: Pages,
    content: any
    
) :Promise<{message: string}> => {
    try {
        const existingSection = await table.findOne({  // Check if a section with the same type already exists for this page
            where: {
                type: type,
                pageId: page.id, // Ensure it's for the same page
            },
        });

        let section;
        if (existingSection) {
            section = await existingSection.update({   // Update the existing section
                content: content, // Overwrite content
            });
            console.log('Updated Section:', section);
            return {message: "Updated Section "}
        } else {
            section = await (page as any).createSection({  // Create a new section if none exists
                type: type,
                content: content,
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
}

export default AddSection