public class main {
    public static void main (String[] args) 
      {
          Scanner scan = new Scanner(System.in);
          int n = scan.nextInt();
      int m = scan.nextInt();scan.nextLine();
      String arrayChar[][]=new String[n][m];
  
      for(int i = 0; i < n; i++){
        for(int j = 0; j < m; j++){
          arrayChar[i][j]= scan.next();
        }
      }
      for(int i = 0; i < n; i++){
        for(int j = 0; j < m; j++){
          System.out.print(arrayChar[i][j]);
        }
      }
    }
  }

  public class main {
    public static void main (String[] args) 
      {
          Scanner scan = new Scanner(System.in);
          int n = scan.nextInt();
      int m = scan.nextInt();scan.nextLine();
      String arrayChar[][]=new String[n][m];
  
      for(int i = 0; i < n; i++){
        arrayChar[i] = scan.nextLine().split("");
      }
      for(int i = 0; i < n; i++){
        for(int j = 0; j < m; j++){
          System.out.println(arrayChar[i][j]);
        }
      }
    }
  }

Scanner scan = new Scanner(System.in);
String temp =  scan.nextLine();
String[] n =  temp.split("\\.");
String[] m = n[1].split("");
if(Long.parseLong(m[0]) == 9 && m[0].length() > 1) System.out.println("GOTO Vasilisa.");
else if(Long.parseLong(m[0]) >= 5) System.out.println( (int) Math.ceil(Float.parseFloat(temp)));
else System.out.println(n[0]);