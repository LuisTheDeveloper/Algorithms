import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class BubbleSort {
    public static void bubbleSort(int[] array) {
        boolean isSorted = false;
        int lastUnsorted = array.length - 1;
        System.out.println(lastUnsorted);
        while (!isSorted) {
            isSorted = true;
            for (int i = 0; i < lastUnsorted; i++) {
                System.out.println("lastUnsorted:" + lastUnsorted);
                System.out.println("i:" + i);
                if (array[i] > array[i + 1]) {
                    swap(array, i, i + 1);
                    isSorted = false;
                }
            }
            lastUnsorted--;
        }
    }

    public static void swap(int[] array, int i, int j) {
        int tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;

    }

    static void PrintValues(int[] array) {
        for (int i = 0; i <= array.length - 1; i++) {
            System.out.println(array[i]);
        }
    }

    public static void main(String[] args) {
        int[] unSortedArr = { 1, 9, 2, 8 };

        // PrintValues(unSortedArr);

        bubbleSort(unSortedArr);

        // PrintValues(unSortedArr);
    }
}