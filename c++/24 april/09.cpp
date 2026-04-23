#include<iostream>
using namespace std;
int main(){
    int T;
    cout << "enter t in celsius";
    cin>> T;
    double F = (T - 32.0) * 5.0 / 9.0;
    cout << F;
    return 0;

}