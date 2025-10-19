import java.util.Arrays;
import java.util.Scanner;

// Main Function
public class Main {
    public static void main(String[] args) {
        // Input Elements
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter number of elements: ");
        int n = scanner.nextInt();

        int[] arr = new int [n];
        System.out.print("Enter " + n + " elements: ");

        for(int i = 0; i < n; i++) {
            arr[i] = scanner.nextInt();
        }

        System.out.println("Before sort:  " + Arrays.toString(arr));

        int lb = 0;
        int ub = arr.length - 1;
        quickSort(arr, lb, ub);

        System.out.println("After sort:  " + Arrays.toString(arr));
    }

    // Quick Sort Function
    static void quickSort(int[] arr, int lb, int ub) {
        if (lb < ub) {
            int loc = partition(arr, lb, ub);
            quickSort(arr, lb, loc - 1);
            quickSort(arr, loc + 1, ub);
        }
    }

    // Partition Function
    static int partition(int[] arr, int lb, int ub) {
        int pivot = arr[lb];
        int start = lb;
        int end = ub;

        while (start <= end) {
            while (start <= ub && arr[start] <= pivot) {
                start++;
            }
            while (end >= lb && arr[end] > pivot) {
                end--;
            }
            if(start<=end) {
                swap(arr, start, end);
            }
        }
        swap(arr, lb, end);
        return end;
    }

    // Swap Function
    static void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

}



