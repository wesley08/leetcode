import java.nio.charset.StandardCharsets;

public static int camelcase(String s) {
    
    byte[] bytes = s.getBytes(StandardCharsets.US_ASCII);
    int result =1;
    int i = 0;

    Arrays.sort(bytes);

    while (bytes[i] > 64 && bytes[i] < 91) {
        result += 1;
        i += 1;
    }
    return result;
}
