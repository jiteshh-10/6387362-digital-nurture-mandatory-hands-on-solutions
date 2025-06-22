package week1.DesignPatternsandPrinciples.FactoryMethodPatternExample;

public class FactoryMethodPattern {
    public static void main(String[] args) {
        System.out.println("Testing Factory Method Pattern");
        System.out.println("================================");

        // Create Word document using factory
        DocumentFactory wordFactory = new WordDocumentFactory();
        Document wordDoc = wordFactory.createDocument();
        System.out.println("\nCreating Word Document:");
        wordDoc.open();
        wordDoc.save();
        wordDoc.close();

        // Create PDF document using factory
        DocumentFactory pdfFactory = new PdfDocumentFactory();
        Document pdfDoc = pdfFactory.createDocument();
        System.out.println("\nCreating PDF Document:");
        pdfDoc.open();
        pdfDoc.save();
        pdfDoc.close();

        // Create Excel document using factory
        DocumentFactory excelFactory = new ExcelDocumentFactory();
        Document excelDoc = excelFactory.createDocument();
        System.out.println("\nCreating Excel Document:");
        excelDoc.open();
        excelDoc.save();
        excelDoc.close();

        System.out.println("\nFactory Method Pattern working successfully!");
    }
}
