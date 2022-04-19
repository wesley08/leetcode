import java.util.*;
import java.io.*;

class Solution{
    public static void main(String []argh){
        Scanner in = new Scanner(System.in);
        int t=in.nextInt();
        String[] sa = new String[t]; 
        for(int i=0;i<t;i++){
            int a = in.nextInt();
            int b = in.nextInt();
            int n = in.nextInt();
            
            int temp = a+b;
            sa[i] = temp+" ";
            int multiple = 1;
            for(int j=2; j<=n; j++){
                temp += (multiple*=2)*b;
                sa[i] += temp + " ";
            }
            System.out.println(sa[i]);
        }
        in.close();
    }
}
