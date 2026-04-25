#include<iostream>
#include<cmath>
using namespace std;
int main(){
    double principal,time,rate,amount,CI;

    cin>> principal;
    cin>> rate;
    cin>> time;
    amount = principal * pow((1 + rate / 100),time);
    CI = amount - principal;
    cout << CI;
    return 0;
}