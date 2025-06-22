package week1.DesignPatternsandPrinciples.FactoryMethodPatternExample;

class PdfDocument implements Document {
    public void open() {
        System.out.println("PDF document opened");
    }

    public void save() {
        System.out.println("PDF document saved");
    }

    public void close() {
        System.out.println("PDF document closed");
    }
}