#!/usr/bin/env python3
"""List all documents in Python"""


def list_all(mongo_collection):
    """Return an empty list if no document in the collection"""
    return [x for x in mongo_collection.find()]
