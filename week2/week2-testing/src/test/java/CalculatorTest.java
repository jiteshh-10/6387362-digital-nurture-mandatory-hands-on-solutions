import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {
    private com.myorg.dn4.Calculator calc;

    @Before
    public void setUp() {
        calc = new com.myorg.dn4.Calculator();    // JUnit will call this before each @Test
    }

    @Test
    public void testAdd() {
        assertEquals(5, calc.add(2, 3));
    }

    @Test
    public void testSubtract() {
        assertEquals(4, calc.subtract(7, 3));
    }

    @Test
    public void testMultiply() {
        assertEquals(12, calc.multiply(4, 3));
    }

    @Test
    public void testDivide() {
        assertEquals(2.5, calc.divide(5, 2), 0.0001);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testDivideByZero() {
        calc.divide(1, 0);
    }
}

