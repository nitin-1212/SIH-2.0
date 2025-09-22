from flask import Flask, request, jsonify, render_template, send_file
from flask_cors import CORS
import mysql.connector
import bcrypt
import datetime
import csv
import io

# Database connection 
def connect_db():
    return mysql.connector.connect(
        host='localhost',
        user='root',
        password='',
        database='testdb'
    )