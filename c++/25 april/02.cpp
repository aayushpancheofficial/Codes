#include<iostream>
using namespace std;
int main(){
    int a,b;
    cout <<"write a value";
    cin >> a;
    cout <<"write b value";
    cin>>b;
    int area , perimeter;
    area = a*b;
    perimeter= 2*(a + b);
    cout << "area :"<<area<<endl;
    cout << "parimeter :"<<perimeter<<endl;
    return 0;
    
}