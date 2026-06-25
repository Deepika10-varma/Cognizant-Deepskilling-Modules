import java.util.logging.Level;
import java.util.logging.Logger;

public class LoggingExample {

    private static final Logger logger = Logger.getLogger(LoggingExample.class.getName());

    public static void main(String[] args) {

        logger.log(Level.SEVERE, "This is an error message");

        logger.log(Level.WARNING, "This is a warning message");

        logger.log(Level.INFO, "Application started successfully");
    }
}