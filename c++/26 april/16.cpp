#include<iostream>
using namespace  std;
int main(){
    int n1,n2;
    cout <<"Enter size of first arry :";
    cin >> n1;
    int arr1[n1];
    cout <<"Enter elements of first arry ";
    for(int i=0; i<n1; i++){
        cin >> arr1[i];
    }
    cout <<"enter size of second array :";
    cin >> n2;
    int arr2[n2];
    cout << "enter elements of second array; ";
    for(int i =0; i <n2; i++){
        cin >> arr2[i];
    }
    if(n1 != n2){
        cout <<"arrays are not equal";
        return 0;
    }
    for(int i =0; i< n1; i++){
        if(arr1[i] != arr2[i]){
            cout <<"arrays are not equal";
            return 0;
        }
    }
    cout <<"arrays are equal";
    return 0;
}