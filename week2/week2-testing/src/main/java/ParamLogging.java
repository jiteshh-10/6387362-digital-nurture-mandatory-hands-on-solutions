package com.myorg.dn4;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ParamLogging {
    private static final Logger logger =
            LoggerFactory.getLogger(ParamLogging.class);

    public static void main(String[] args) {
        String user = "alice";
        int    items = 5;
        logger.info("User {} has {} items in their cart.", user, items);
    }
}

