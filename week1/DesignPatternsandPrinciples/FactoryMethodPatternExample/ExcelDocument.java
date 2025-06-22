package week1.DesignPatternsandPrinciples.FactoryMethodPatternExample;

class ExcelDocument implements Document {
    public void open() {
        System.out.println("Excel document opened");
    }

    public void save() {
        System.out.println("Excel document saved");
    }

    public void close() {
        System.out.println("Excel document closed");
    }
}