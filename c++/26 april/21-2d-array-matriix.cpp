#include<iostream>
using namespace std;

int main() {
    int n;
    cout << "Enter size of matrix (n x n): ";
    cin >> n;

    int matrix[n][n];

    cout << "Enter matrix elements:\n";
    for(int i = 0; i < n; i++) {
        for(int j = 0; j < n; j++) {
            cin >> matrix[i][j];
        }
    }

    int principalSum = 0;
    int secondarySum = 0;

    for(int i = 0; i < n; i++) {
        principalSum += matrix[i][i];
        secondarySum += matrix[i][n - i - 1];
    }

    cout << "Principal Diagonal = " << principalSum << endl;
    cout << "Secondary Diagonal = " << secondarySum << endl;

    return 0;
}