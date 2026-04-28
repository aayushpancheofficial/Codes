#include<iostream>
using namespace std;
int main(){
    int a;
    int b;
    cout <<"a and b :";
    cin>> a >>b;
    cout <<"beefor swiching" <<"a="<<a <<" ,"<<"b="<<b<<endl;

    int swap =a;
     a=b;
     b=swap;
     cout << "after swiching"<<"a="<<a <<" ,"<<"b="<<b;
     return 0;
}