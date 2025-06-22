package week1.DesignPatternsandPrinciples.FactoryMethodPatternExample;

class WordDocument implements Document {
    public void open() {
        System.out.println("Word document opened");
    }

    public void save() {
        System.out.println("Word document saved");
    }

    public void close() {
        System.out.println("Word document closed");
    }
}