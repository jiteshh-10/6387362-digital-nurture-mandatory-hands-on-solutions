import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class AAAExampleTest {
    private com.myorg.dn4.Calculator calc;

    @Before
    public void init() {
        // ARRANGE: set up fixture
        calc = new com.myorg.dn4.Calculator();
    }

    @After
    public void tearDown() {
        // TEARDOWN: cleanup
        calc = null;
    }

    @Test
    public void testAddUsingAAA() {
        // ACT
        int result = calc.add(10, 20);
        // ASSERT
        assertEquals(30, result);
    }
}
