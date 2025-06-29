package com.myorg.dn4;

import ch.qos.logback.classic.Logger;
import ch.qos.logback.classic.spi.ILoggingEvent;
import ch.qos.logback.core.read.ListAppender;
import org.junit.Before;
import org.junit.Test;
import org.slf4j.LoggerFactory;

import java.util.List;

import static org.junit.Assert.*;

public class ParamLoggingTest {

    private ListAppender<ILoggingEvent> listAppender;

    @Before
    public void init() {
        Logger logger = (Logger) LoggerFactory.getLogger(com.myorg.dn4.ParamLogging.class);
        listAppender = new ListAppender<>();
        listAppender.start();
        logger.addAppender(listAppender);
    }

    @Test
    public void shouldLogInfoWithParameters() {
        com.myorg.dn4.ParamLogging.main(new String[]{});
        List<ILoggingEvent> logs = listAppender.list;

        assertFalse(logs.isEmpty());
        ILoggingEvent first = logs.get(0);
        assertEquals("INFO", first.getLevel().toString());
        assertEquals("User alice has 5 items in their cart.", first.getFormattedMessage());
    }
}
