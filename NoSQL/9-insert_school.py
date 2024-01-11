#!/usr/bin/env python3
"""Write a Python function that inserts a new document in
a collection based on kwargs
- mongo_collection will be the pymongo collection object
- Returns the new _id
"""


def insert_school(mongo_collection, **kwargs):
    """Insert a document in Python"""
    return [x for x in kwargs.mongo_collection()]
