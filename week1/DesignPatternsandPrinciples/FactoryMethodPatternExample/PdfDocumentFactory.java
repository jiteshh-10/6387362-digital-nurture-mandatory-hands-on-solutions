package week1.DesignPatternsandPrinciples.FactoryMethodPatternExample;

class PdfDocumentFactory extends DocumentFactory {
    public Document createDocument() {
        return new PdfDocument();
    }
}