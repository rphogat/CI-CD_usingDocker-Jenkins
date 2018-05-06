import java.io.IOException;
import java.util.Scanner;

public class minmin {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
//		try {
		int [][] bagOfTasks =new int[7][8];
		String [ ] [ ] scores = {   { "40", "110", "45"},
                                    { "60", "75", "80"},
                                    { "32", "100", "95"},
                                    { "50", "140", "30"},
                                    { "70", "135", "90"},
                                    { "20", "90", "100"}
                                 
                             };
		
		isPrime();
		System.out.println("Enter string to reverse:");
        
        Scanner read = new Scanner(System.in);
        String str = read.nextLine();
       
        System.out.println(reverseStringJava(str));
		//System.out.println(scores +"scores");
		for (int i = 0; i < scores.length; i++) {
		    for (int j = 0; j < scores[i].length; j++) {
		       // System.out.print(scores[i][j] + " ");
		    }
		    //System.out.println();
		}
		
		//System.out.print("The mimimum"+mincol(scores));
//		for ( int i = 0; i < scores.length; i++ )
//	    {
//	        int min = Integer.MAX_VALUE;
//	        for ( int j = 0; j < scores[ i ].length; j++ )
//	            if ( Integer.parseInt(scores[ j ] [ i ]) < min )
//	                min = Integer.parseInt(scores [ j ] [ i ]);
//	        System.out.println( "Minimum of column " + i + " = " + min );
//	    }
//		   } catch (java.lang.ArrayIndexOutOfBoundsException e) {
//		      	System.out.println("ASM Error while reading class (" + e.getMessage() + ")");
//		    }
	}
	
	public static int [] onBase (int a[]) {
		
		for(int i=0; i<=100; i++) {
			if(i% 3 == 0)
			{
				//System.out.println("On");
			}else if(i%7 ==0)
			{
				//System.out.println("Base");
			}else if(i% 3 == 0 && i%7 ==0) {
				//System.out.println("OnBase");
			}else {}
			
		}
		
		
		return a;
		
		
	}
	

	    public static void isPrime() {


	            //System.out.println("Prime numbers from 1 to 100 are as follows:");

	            //loop through the numbers one by one
	            for(int i=1; i < 100; i++){

	                    boolean isPrime = true;

	                    for(int j=2; j < i ; j++){

	                            if(i % j == 0){
	                                    isPrime = false;
	                                    break;
	                            }
	                    }
	                    // print the prime numbers from 1 to 100
//	                    if(isPrime)
//	                            System.out.print(i + " ");
	            }
	    }
	    public static String reverseArrayOfStrings(String str)
	    {	
	    	    String reverse = "";
	        for(int i = str.length() - 1; i >= 0; i--)
	        {
	            reverse = reverse + str.charAt(i);
	        }
	        
	        System.out.println("Reversed string is:");
	        System.out.println(reverse);
			return reverse;
	    }
	    public static String reverseStringJava(String str) 
	    {     
	        if ((str.length() <= 1)||(str==null) )
	            return str;
	        return reverseStringJava(str.substring(1)) + str.charAt(0);
	    }

	 public static int [] mincol (String [][] n) {
		 int [][]Ne = new int[7][8];
		 int N;
		 System.out.println("Ne"+Ne);
		 for (int i = 0; i < n.length; i++) {
			    for (int j = 0; j < n[i].length; j++) {
			    	    if(n[i][j] == "null")
			    	    {
			    	    continue;
			    	    }
			    	    else {
			        N = Integer.parseInt(n[i][j]);
			    	    }
			        System.out.println("N"+N);
			        Ne[i][j] = N;
//			        System.out.println("Ne"+Ne);
			    }
			    
			    System.out.println();
			}
	        int[] result = new int[n[0].length];
	 
	        for (int i = 0; i < n.length; i++) {
	 
	            int min = Ne[0][i];
	            System.out.println("min"+min);
	            System.out.println("Ne[0][i]"+Ne[0][i]);
	            for (int j = 0; j < 7; j++) {
	            	System.out.println("Ne[j][i]"+Ne[0].length);
	                if (Ne[j][i] > 0 && Ne[j][i] < min) {
	                    min = Ne[j][i];
	                    System.out.println("min1"+min);
	                }
	                System.out.println("min2"+min);
	            }
	            System.out.println("min3"+min);
	            result[i] = min;
	            System.out.println("result[i]"+result[i]);
	        }
	        for (int i=0;i<n[0].length;i++)
	        {
	        System.out.println("result[i]"+result[i]);
	        }
	        return result;
	    }
	
	

}
