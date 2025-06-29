import org.junit.Test;
import static org.junit.Assert.*;

public class AssertionsTest {

    @Test
    public void testAssertions() {
        // equals, true, false, null, notNull
        assertEquals(5, 2 + 3);
        assertTrue("5 is greater than 3", 5 > 3);
        assertFalse("5 is not less than 3", 5 < 3);
        assertNull(null);
        assertNotNull(new Object());
    }
}
