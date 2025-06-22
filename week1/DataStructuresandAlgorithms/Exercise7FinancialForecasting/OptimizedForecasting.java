package week1.DataStructuresandAlgorithms.Exercise7FinancialForecasting;

public class OptimizedForecasting {

    // Iterative approach - more efficient
    public static double calculateFutureValueIterative(double presentValue, double growthRate, int years) {
        double result = presentValue;

        for (int i = 0; i < years; i++) {
            result *= (1 + growthRate);
        }

        return result;
    }

    // Direct mathematical formula - most efficient
    public static double calculateFutureValueDirect(double presentValue, double growthRate, int years) {
        return presentValue * Math.pow(1 + growthRate, years);
    }

    public static void main(String[] args) {
        double presentValue = 1000.0;
        double grate = 0.08;
        int years = 5;

        double futureValueIterative = calculateFutureValueIterative(presentValue, grate, years);

        System.out.println("Calculated Value through Iterative Method:");
        System.out.println("Initial Investment: " + presentValue);
        System.out.println("Growth Rate: " + (grate * 100) + "%");
        System.out.println("Years: " + years);
        System.out.println("Future Value: " + String.format("%.2f", futureValueIterative));

        double futureValueDirect = calculateFutureValueDirect(presentValue, grate, years);

        System.out.println("Calculated Value through Direct(Formula) Method:");
        System.out.println("Initial Investment: " + presentValue);
        System.out.println("Growth Rate: " + (grate * 100) + "%");
        System.out.println("Years: " + years);
        System.out.println("Future Value: " + String.format("%.2f", futureValueDirect));

    }
}
