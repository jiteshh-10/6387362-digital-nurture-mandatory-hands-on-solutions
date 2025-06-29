package com.myorg.dn4;

import org.junit.Before;
import org.junit.Test;
import org.mockito.InOrder;

import static org.mockito.Mockito.*;

public class MyServiceVerifyInteractionsTest {

    private com.myorg.dn4.ExternalApi mockApi;
    private com.myorg.dn4.MyService service;

    @Before
    public void setUp() {
        mockApi = mock(com.myorg.dn4.ExternalApi.class);
        // stub getData so fetchData() won’t return null
        when(mockApi.getData()).thenReturn("data");
        service = new com.myorg.dn4.MyService(mockApi);
    }

    @Test(expected = RuntimeException.class)
    public void testVoidMethodThrows() {
        // ***FIXED***: stub the exact argument "bad:processed"
        doThrow(new RuntimeException("boom"))
                .when(mockApi).sendData("bad:processed");

        // this now throws as expected
        service.processAndSend("bad");
    }

    @Test
    public void testVerifyGetDataCalledOnce() {
        service.fetchData();
        verify(mockApi, times(1)).getData();
    }

    @Test
    public void testVerifyOrderOfCalls() {
        service.fetchData();
        service.processAndSend("x");
        InOrder inOrder = inOrder(mockApi);
        inOrder.verify(mockApi).getData();
        inOrder.verify(mockApi).sendData("x:processed");
    }
}
