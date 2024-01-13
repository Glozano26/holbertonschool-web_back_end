#!/usr/bin/env python3
"""Implement a get_hyper method that takes the same arguments (and defaults)
 as get_page and returns a dictionary containing the following key-value pairs:

- page_size: the length of the returned dataset page
- page: the current page number
- data: the dataset page (equivalent to return from previous task)
- next_page: number of the next page, None if no next page
- prev_page: number of the previous page, None if no previous page
- total_pages: the total number of pages in the dataset as an integer
Make sure to reuse get_page in your implementation."""

import csv
import math
from typing import List


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """return a list with the values of the index"""
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        start_index, end_index = index_range(page, page_size)
        dataset = self.dataset()

        end_index = min(end_index, len(dataset))

        # return dataset[start_index:5]
        return dataset[start_index:end_index]

    def get_hyper(self, page: int = 1, page_size: int = 10) -> dict:
        """Hypermedia pagination"""
        # assert isinstance(page, int) and page > 0
        # assert isinstance(page_size, int) and page_size > 0

        if len(self.get_page(page + 1, page_size)) < page_size:
            next_page = None
        else:
            next_page = page + 1

        if page > 1 and not self.get_page(page - 1, page_size):
            prev_page = None
        else:
            prev_page = page - 1

        total_pages = int(len(self.dataset()) / page_size)

        dict_return = {
            "page_size": page_size,
            "page": page,
            "data": self.get_page(page, page_size),
            "next_page": next_page,
            "prev_page": prev_page,
            "total_pages": total_pages
        }
        return dict_return


def index_range(page: int, page_size: int) -> tuple:
    """return a  tuple of size two containing a start index
    and an end index """
    start_index = (page - 1) * page_size
    end_index = page * page_size
    return start_index, end_index
