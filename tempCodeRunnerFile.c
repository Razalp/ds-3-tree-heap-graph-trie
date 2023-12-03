#include <stdio.h>
int main()
{
int a[100]={2,10,20,30,10,20,7,10,4};
int n=9,flag=0,temp,i,j,k;
for(i=0;i<n;i++){
{
for(j=i+1;j<n;j++){
flag=0;
    if(a[i]==a[j]){
        for ( k = j; k < n; k++)
        {
            a[k]=a[k+1];
            flag=1;
        }
n--;
i--;
}
}
}
}
for(i=0;i<n;i++){
printf("%d ",a[i]);
}
return 0;
}
