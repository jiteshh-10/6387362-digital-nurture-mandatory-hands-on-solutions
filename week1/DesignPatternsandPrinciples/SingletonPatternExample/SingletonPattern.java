package week1.DesignPatternsandPrinciples.SingletonPatternExample;

public class SingletonPattern {
        public static void main(String[] args) {
            System.out.println("Testing Singleton Pattern");

            Logger log1 = Logger.getObject();
            log1.printMessage("First object is working");

            Logger log2 = Logger.getObject();
            log2.printMessage("Second object is working");

            if (log1 == log2) {
                System.out.println("Both objects are same - Singleton is working!");
            } else {
                System.out.println("Different objects created - Something is wrong");
            }

            log1.printMessage("Message from log1");
            log2.printMessage("Message from log2");
        }
}
