// File: Decryptor.java
public class Decryptor {
    public static String Decrypt(String s) {
        if (s.length() <= 16) {
            return " ";
        }
        int num = 0;
        for (int i = 0; i < 16; i++) {
            num += s.charAt(i);
        }
        num = num % 24 + 1;

        StringBuilder stringBuilder = new StringBuilder();
        for (int i = 16; i < s.length(); i++) {
            char c = (char) (s.charAt(i) - 1536 - ((i - 16) % num));
            stringBuilder.append(c);
        }
        return stringBuilder.toString();
    }

    public static void main(String[] args) {
        if (args.length != 1) {
            System.err.println("Usage: java Decryptor <encryptedString>");
            System.exit(1);
        }
        String encrypted = args[0];
        String decrypted = Decrypt(encrypted);
        System.out.println("Decrypted text: " + decrypted);
    }
}