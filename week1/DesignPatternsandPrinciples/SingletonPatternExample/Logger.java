package week1.DesignPatternsandPrinciples.SingletonPatternExample;

class Logger {
    private static Logger obj = null;

    private Logger() {
        System.out.println("Logger object created");
    }

    public static Logger getObject() {
        if (obj == null) {
            obj = new Logger();
        }
        return obj;
    }

    public void printMessage(String msg) {
        System.out.println("Log: " + msg);
    }
}

