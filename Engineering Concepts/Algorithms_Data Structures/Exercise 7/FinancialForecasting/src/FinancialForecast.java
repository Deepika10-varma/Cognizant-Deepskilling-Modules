public class FinancialForecast {

    public static double forecast(double presentValue,
                                  double growthRate,
                                  int years) {

        // Base Case
        if (years == 0) {
            return presentValue;
        }

        // Recursive Case
        return (1 + growthRate) *
               forecast(presentValue, growthRate, years - 1);
    }

    public static void main(String[] args) {

        double presentValue = 10000;
        double growthRate = 0.10; // 10%
        int years = 5;

        double futureValue =
                forecast(presentValue, growthRate, years);

        System.out.println("Present Value: Rs." + presentValue);
        System.out.println("Growth Rate: " + (growthRate * 100) + "%");
        System.out.println("Years: " + years);
        System.out.println("Future Value: Rs." + futureValue);
    }
}
