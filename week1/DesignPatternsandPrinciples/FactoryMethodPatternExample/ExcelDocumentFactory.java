package week1.DesignPatternsandPrinciples.FactoryMethodPatternExample;

class ExcelDocumentFactory extends DocumentFactory {
    public Document createDocument() {
        return new ExcelDocument();
    }
}
