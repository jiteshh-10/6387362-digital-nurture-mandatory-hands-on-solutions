import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;
import static org.mockito.Mockito.*;

public class MyServiceMockingStubbingTest {

    public com.myorg.dn4.ExternalApi mockApi;
    private com.myorg.dn4.MyService service;

    @Before
    public void setUp() {
        // 1. create mock
        mockApi = mock(com.myorg.dn4.ExternalApi.class);
        // 2. stub getData
        when(mockApi.getData())
                .thenReturn("firstCall")
                .thenReturn("secondCall");
        service = new com.myorg.dn4.MyService(mockApi);
    }

    @Test
    public void testFetchDataReturnsStubbedValues() {
        // FIRST invocation
        String result1 = service.fetchData();
        assertEquals("firstCall", result1);

        // SECOND invocation
        String result2 = service.fetchData();
        assertEquals("secondCall", result2);
    }

    @Test
    public void testProcessAndSendAppendsProcessed() {
        // stub sendData to do nothing (not strictly required)
        doNothing().when(mockApi).sendData(anyString());

        service.processAndSend("inputVal");

        // verify sendData called with the processed string
        verify(mockApi).sendData("inputVal:processed");
    }
}
