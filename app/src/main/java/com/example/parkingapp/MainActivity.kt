package com.example.parkingapp

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.appcompat.widget.Toolbar
import android.widget.ImageView

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // Setup toolbar
        val toolbar = findViewById<Toolbar>(R.id.toolbar)
        setSupportActionBar(toolbar)
        supportActionBar?.setDisplayShowTitleEnabled(false)

        // Setup click listeners for header icons
        findViewById<ImageView>(R.id.menu_icon).setOnClickListener {
            // Handle menu click - you can add navigation drawer here
        }

        findViewById<ImageView>(R.id.notification_icon).setOnClickListener {
            // Handle notification click - you can add notification activity here
        }

        findViewById<ImageView>(R.id.profile_icon).setOnClickListener {
            // Handle profile click - you can add profile activity here
        }
    }
}
