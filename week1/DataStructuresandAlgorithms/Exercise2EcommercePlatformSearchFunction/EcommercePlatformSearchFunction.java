package week1.DataStructuresandAlgorithms.Exercise2EcommercePlatformSearchFunction;

public class EcommercePlatformSearchFunction {

    public static void main(String[] args) {
        // Create sample product catalog
        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Coffee Maker", "Appliances"),
                new Product(103, "Running Shoes", "Sports"),
                new Product(104, "Smartphone", "Electronics"),
                new Product(105, "Yoga Mat", "Sports"),
                new Product(106, "Blender", "Appliances"),
                new Product(107, "Headphones", "Electronics"),
                new Product(108, "Tennis Racket", "Sports")
        };

        System.out.println("=== E-Commerce Product Search Demo ===\n");

        // Display all products
        System.out.println("Available Products:");
        for (int i = 0; i < products.length; i++) {
            System.out.println((i + 1) + ". " + products[i]);
        }

        String searchProduct = "Coffee Maker";
        System.out.println("\nSearching for: " + searchProduct);
        System.out.println("----------------------------------------");

        // Test Linear Search
        System.out.println("\n1. LINEAR SEARCH RESULTS:");
        int linearResult = LinearSearch.findProduct(products, searchProduct);
        if (linearResult != -1) {
            System.out.println("Product found at index: " + linearResult);
            System.out.println("Product details: " + products[linearResult]);
        }

        // Test Binary Search
        System.out.println("\n2. BINARY SEARCH RESULTS:");
        Product[] sortedProducts = products.clone();
        BinarySearch.sortProductsByName(sortedProducts);

        System.out.println("Products after sorting by name:");
        for (int i = 0; i < sortedProducts.length; i++) {
            System.out.println((i + 1) + ". " + sortedProducts[i]);
        }
        System.out.println();

        int binaryResult = BinarySearch.findProduct(sortedProducts, searchProduct);
        if (binaryResult != -1) {
            System.out.println("Product found at index: " + binaryResult);
            System.out.println("Product details: " + sortedProducts[binaryResult]);
        }

        // Performance comparison
        System.out.println("\n=== PERFORMANCE ANALYSIS ===");
        performanceComparison();
    }

    public static void performanceComparison() {
        // Create larger dataset for performance testing
        Product[] largeInventory = new Product[1000];
        for (int i = 0; i < 1000; i++) {
            largeInventory[i] = new Product(i + 1, "Product_" + String.format("%03d", i), "Category_" + (i % 10));
        }

        String searchItem = "Product_500";
        System.out.println("Testing with 1000 products, searching for: " + searchItem);

        // Linear search performance
        System.out.println("\nLinear Search Performance:");
        long startTime = System.currentTimeMillis();
        LinearSearch.findProduct(largeInventory, searchItem);
        long linearTime = System.currentTimeMillis() - startTime;

        // Binary search performance
        System.out.println("\nBinary Search Performance:");
        Product[] sortedInventory = largeInventory.clone();
        BinarySearch.sortProductsByName(sortedInventory);

        startTime = System.currentTimeMillis();
        BinarySearch.findProduct(sortedInventory, searchItem);
        long binaryTime = System.currentTimeMillis() - startTime;

        System.out.println("\nExecution Time Comparison:");
        System.out.println("Linear Search: " + linearTime + " milliseconds");
        System.out.println("Binary Search: " + binaryTime + " milliseconds");
    }
}
