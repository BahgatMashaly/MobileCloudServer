package com.Plugins.MyAllPlugins.Service;

import de.greenrobot.event.EventBus;

/**
 * Created by Bahgat on 29/4/2014.
 */
public class Event_objec extends EventBus
{
    String to_how;String from_how;String the_order;String contant;
    public Event_objec(String from_howx, String to_howx, String orderx, String contantx)
    {
        to_how=to_howx;
        from_how=from_howx;

        the_order=orderx;
        contant =contantx;
    }
    public String getTo_how()
    {
        return to_how;
    }

    public void setTo_how(String to_how)
    {
        this.to_how = to_how;
    }

    public String getFrom_how()
    {
        return from_how;
    }

    public void setFrom_how(String from_how)
    {
        this.from_how = from_how;
    }

    public String getThe_order()
    {
        return the_order;
    }

    public void setThe_order(String the_order)
    {
        this.the_order = the_order;
    }

    public String getContant()
    {
        return contant;
    }

    public void setContant(String contant)
    {
        this.contant = contant;
    }







}
