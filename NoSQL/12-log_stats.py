#!/usr/bin/env python3
"""Write a Python script that provides some stats about Nginx logs
stored in MongoDB:"""
from pymongo import MongoClient


if __name__ == "__main__":
    client = MongoClient('mongodb://127.0.0.1:27017')

    bd = 'logs'
    collection = 'nginx'

    
