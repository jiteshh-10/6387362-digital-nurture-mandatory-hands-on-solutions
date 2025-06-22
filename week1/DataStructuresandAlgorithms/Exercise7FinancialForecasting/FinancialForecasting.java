package week1.DataStructuresandAlgorithms.Exercise7FinancialForecasting;


public class FinancialForecasting {

    public static double calculateFutureValue(double currentValue, double growthRate, int years) {
        if (years == 0) {
            return currentValue;
        }

        return calculateFutureValue(currentValue * (1 + growthRate), growthRate, years - 1);
    }

    public static void main(String[] args) {
        double investment = 1000.0;
        double rate = 0.08;
        int years = 5;

        double futureValue = calculateFutureValue(investment, rate, years);

        System.out.println("Initial Investment: " + investment);
        System.out.println("Growth Rate: " + (rate * 100) + "%");
        System.out.println("Years: " + years);
        System.out.println("Future Value: " + String.format("%.2f", futureValue));

    }
}
