package week1.DataStructuresandAlgorithms.Exercise2EcommercePlatformSearchFunction;

import java.util.Arrays;
import java.util.Comparator;

public class BinarySearch {

    public static void sortProductsByName(Product[] products) {
        Arrays.sort(products, new Comparator<Product>() {
            public int compare(Product p1, Product p2) {
                return p1.getProductName().compareToIgnoreCase(p2.getProductName());
            }
        });
    }

    public static int findProduct(Product[] sortedProducts, String searchName) {
        int left = 0;
        int right = sortedProducts.length - 1;
        int comparisons = 0;

        while (left <= right) {
            comparisons++;
            int middle = (left + right) / 2;
            String middleProductName = sortedProducts[middle].getProductName();

            int comparison = middleProductName.compareToIgnoreCase(searchName);

            if (comparison == 0) {
                System.out.println("Binary Search - Found after " + comparisons + " comparisons");
                return middle;
            } else if (comparison > 0) {
                right = middle - 1;  // Search left half
            } else {
                left = middle + 1;   // Search right half
            }
        }

        System.out.println("Binary Search - Product not found after " + comparisons + " comparisons");
        return -1;
    }
}
