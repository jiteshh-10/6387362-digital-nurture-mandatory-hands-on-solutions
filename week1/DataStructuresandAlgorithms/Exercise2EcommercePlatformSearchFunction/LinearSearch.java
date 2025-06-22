package week1.DataStructuresandAlgorithms.Exercise2EcommercePlatformSearchFunction;

public class LinearSearch {

    public static int findProduct(Product[] products, String searchName) {
        int comparisons = 0;

        for (int i = 0; i < products.length; i++) {
            comparisons++;
            if (products[i].getProductName().equalsIgnoreCase(searchName)) {
                System.out.println("Linear Search - Found after " + comparisons + " comparisons");
                return i;
            }
        }

        System.out.println("Linear Search - Product not found after " + comparisons + " comparisons");
        return -1;
    }
}
