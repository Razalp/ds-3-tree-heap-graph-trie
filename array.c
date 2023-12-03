#include <stdio.h>
int main()
{ 
 int a[100]={1,2,1,4,5,4,5,5};
 int n=6,count,i,j;
 
 for(i=0;i<n;i++){
 count=0;
 for(j=0;j<n;j++){
 if(i!=j && a[i]==a[j]){
 count++;
 a[j]=-1;
 
 }
 
 }
 if(count==1 && a[i]!=-1){
 printf("%d ",a[i]);
 }
 }
 return 0;
}
