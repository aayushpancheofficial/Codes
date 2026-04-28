#include<iostream>
using namespace std;
int main(){
    int a,b;
    char c;

    cout <<  "Enter a operetor fist letter(a=+)"<<endl<<" (s=-)"<<endl<<"(m=*)"<<endl<<"(d=/)";
    cin >> c;

    cout <<"Enter a number num1 :"<<"and Enter a number num2 :";
    cin>> a>>b;
    if(c == 'a'){
    cout << a+b;
    }
    else if(c == 's'){
    cout << a-b;
    }
    else if(c == 'm'){
    cout << a*b;
    }
    else if(c == 'd'){
    cout << a/b;
    }
    else{
    cout << "error";
    }
}