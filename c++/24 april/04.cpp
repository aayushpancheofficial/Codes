#include<iostream>
using namespace std;
int main(){
    int a,b;
    cout<<" write a number";
    cin>>a;
    cout<<" write b number";
    cin>>b;
    int temp;
    temp= a;
    a=b;
    b = temp;
    cout << "a="<<a<<endl;
    cout << "b="<<b;
    return 0;
}