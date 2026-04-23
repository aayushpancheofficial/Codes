#include<iostream>
using namespace std;
float mul_floatnumber(float a, float b){return a*b;}
int main(){
    float A = 1.2, B = 3.0, product;
    product = mul_floatnumber(A, B);
    cout << product;
    return 0;

}