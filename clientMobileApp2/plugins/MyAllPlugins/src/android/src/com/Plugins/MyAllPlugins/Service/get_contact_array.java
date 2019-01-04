package com.Plugins.MyAllPlugins.Service;

import android.content.ContentResolver;
import android.content.Context;
import android.database.Cursor;
import android.net.Uri;
import android.provider.ContactsContract;

import java.util.HashMap;

/**
 * Created by Admin on 3/31/2014.
 */
public class get_contact_array {


    //HashMap مفهوش ترتيب مفهوش تكرار , لو اتكرر بيعمل زي ابديت
    //Hashtable قديم لا تستخدمه
    // LinkedHashMap فيه ترتيب
    //TreeMap بتحط فيها حاجات جوه بعضها مثلا عشر ثلاجات من الثلاجات ذات الثلاث ه باب مثلا
    HashMap<String, String> get_contact_array(Context context) {
        //  HashMap<String,> contacts = new ArrayList<String>();
        HashMap<String, String> contacts = new HashMap<String, String>();
        String phoneNumber = null;


        String _ID = ContactsContract.Contacts._ID;
        String DISPLAY_NAME = ContactsContract.Contacts.DISPLAY_NAME;
        String HAS_PHONE_NUMBER = ContactsContract.Contacts.HAS_PHONE_NUMBER;

        Uri PhoneCONTENT_URI = ContactsContract.CommonDataKinds.Phone.CONTENT_URI;
        String Phone_CONTACT_ID = ContactsContract.CommonDataKinds.Phone.CONTACT_ID;
        String NUMBER = ContactsContract.CommonDataKinds.Phone.DATA4;

        String[] projection = new String[]{
                ContactsContract.Contacts.DISPLAY_NAME,
                ContactsContract.Contacts.HAS_PHONE_NUMBER,
                ContactsContract.Contacts._ID
        };

        ContentResolver contentResolver = context.getContentResolver();

        String selection = ContactsContract.Contacts.IN_VISIBLE_GROUP + " = '"
                + ("1") + "'";
        String sortOrder = ContactsContract.Contacts.DISPLAY_NAME
                + " COLLATE LOCALIZED ASC";
        Cursor cursor = contentResolver.query(
                ContactsContract.Contacts.CONTENT_URI, null, selection
                        + " AND " + ContactsContract.Contacts.HAS_PHONE_NUMBER + ">=1", null, sortOrder
        );

        if (cursor.getCount() > 0) {
            StringBuilder sp = new StringBuilder();
            String name = null;
//            cursor.moveToFirst();
            int col_is_has_PHONE_NUMBER=  cursor.getColumnIndex(HAS_PHONE_NUMBER);
            int col_ID=   cursor.getColumnIndex(_ID);
            int col_DISPLAY_NAME=  cursor.getColumnIndex(DISPLAY_NAME);
            while (cursor.moveToNext())
            {
                int hasPhoneNumber = Integer.parseInt(cursor.getString(col_is_has_PHONE_NUMBER));
                if (hasPhoneNumber > 0) {
                    String contact_id = cursor.getString(col_ID);
                    name = cursor.getString(col_DISPLAY_NAME);

//                    output.append("\n First Name:" + name);

                    // Query and loop for every phone number of the contact
                    Cursor phoneCursor = contentResolver.query(PhoneCONTENT_URI, null, Phone_CONTACT_ID + " = ?", new String[]{contact_id}, null);

                    while (phoneCursor.moveToNext()) {
                        phoneNumber = phoneCursor.getString(phoneCursor.getColumnIndex(NUMBER));
                        if (phoneNumber != null) {
                            contacts.put(phoneNumber, name);

                        }


                    }
                    phoneCursor.close();


                }


            }
            cursor.close();
        }

        return contacts;
    }




}

