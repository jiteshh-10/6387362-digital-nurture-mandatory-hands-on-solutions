package com.myorg.dn4;

import ch.qos.logback.classic.Logger;
import ch.qos.logback.classic.spi.ILoggingEvent;
import ch.qos.logback.core.read.ListAppender;
import org.junit.Before;
import org.junit.Test;
import org.slf4j.LoggerFactory;

import java.util.List;

import static org.junit.Assert.*;

public class LoggingExampleTest {

    private ListAppender<ILoggingEvent> listAppender;

    @Before
    public void setup() {
        // Grab the Logback logger
        Logger logger = (Logger) LoggerFactory.getLogger(com.myorg.dn4.LoggingExample.class);

        // Attach a ListAppender
        listAppender = new ListAppender<>();
        listAppender.start();
        logger.addAppender(listAppender);
    }

    @Test
    public void errorAndWarnShouldBeLogged() {
        com.myorg.dn4.LoggingExample.main(new String[]{});

        List<ILoggingEvent> logs = listAppender.list;
        assertTrue(logs.size() >= 2);

        assertEquals("This is an error message", logs.get(0).getFormattedMessage());
        assertEquals("ERROR", logs.get(0).getLevel().toString());

        assertEquals("This is a warning message", logs.get(1).getFormattedMessage());
        assertEquals("WARN", logs.get(1).getLevel().toString());
    }
}
